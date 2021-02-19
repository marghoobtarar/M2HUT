import React,{useState,useEffect} from 'react';
import Truncate from 'react-truncate';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import $ from 'jquery'; 

import addUser from '../../../assets/img/add-icon.png'

class AllNotices extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: props.todos,//['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        currentPage: 1,
        todosPerPage: 5,
        upperPageBound: 3,
        lowerPageBound: 0,
        isPrevBtnActive: 'disabled',
        isNextBtnActive: '',
        pageBound: 3
      };
      this.handleClick = this.handleClick.bind(this);
      this.btnDecrementClick = this.btnDecrementClick.bind(this);
      this.btnIncrementClick = this.btnIncrementClick.bind(this);
      this.btnNextClick = this.btnNextClick.bind(this);
      this.btnPrevClick = this.btnPrevClick.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
      this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }
    componentDidUpdate() {
          $("ul li.active").removeClass('active');
          $('ul li#'+this.state.currentPage).addClass('active');
    }
    handleClick(event) {
      let listid = Number(event.target.id);
      this.setState({
        currentPage: listid
      });
      $("ul li.active").removeClass('active');
      $('ul li#'+listid).addClass('active');
      this.setPrevAndNextBtnClass(listid);
    //   this.props.dataPage(this.state.currentPage+1)
      this.props.dataPage(listid)

    }
    setPrevAndNextBtnClass(listid) {
      let totalPage = Math.ceil(this.state.todos.length / this.state.todosPerPage);
      this.setState({isNextBtnActive: 'disabled'});
      this.setState({isPrevBtnActive: 'disabled'});
      if(totalPage === listid && totalPage > 1){
          this.setState({isPrevBtnActive: ''});
      }
      else if(listid === 1 && totalPage > 1){
          this.setState({isNextBtnActive: ''});
      }
      else if(totalPage > 1){
          this.setState({isNextBtnActive: ''});
          this.setState({isPrevBtnActive: ''});
      }
  }
    btnIncrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
  }
    btnDecrementClick() {
      this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
      let listid = this.state.upperPageBound - this.state.pageBound;
      this.setState({ currentPage: listid});
      this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
      
      if((this.state.currentPage -1)%this.state.pageBound === 0 ){
          this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
          this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
      }
      let listid = this.state.currentPage - 1;
      this.setState({ currentPage : listid});
      this.setPrevAndNextBtnClass(listid);
      this.props.dataPage(this.state.currentPage-1)

  }
  btnNextClick() {
      if((this.state.currentPage +1) > this.state.upperPageBound ){
          this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
          this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
      }
      let listid = this.state.currentPage + 1;
      this.setState({ currentPage : listid});
      this.setPrevAndNextBtnClass(listid);
      this.props.dataPage(this.state.currentPage+1)

  }
    render() {
      const { todos, currentPage, todosPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderTodos = currentTodos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
          if(number === 1 && currentPage === 1){
              return(
                  <li key={number} className=' page-item active' id={number}><a href='#' className={`page-link`} id={number} onClick={this.handleClick}>{number}</a></li>
              )
          }
          else if((number < upperPageBound + 1) && number > lowerPageBound){
              return(
                  <li key={number} className='page-item  ' id={number}><a href='#' className={`page-link`} id={number} onClick={this.handleClick}>{number}</a></li>
              )
          }
      });
      let pageIncrementBtn = null;
      if(pageNumbers.length > upperPageBound){
          pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
      }
      let pageDecrementBtn = null;
      if(lowerPageBound >= 1){
          pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
      }
      let renderPrevBtn = null;
      if(isPrevBtnActive === 'disabled') {
          renderPrevBtn = <li style={{cursor:'pointer'}} className={`${isPrevBtnActive} page-item`}>
                         <a className="page-link"id="btnPrev" >Previous</a>

              </li>
      }
      else{
          renderPrevBtn = <li style={{cursor:'pointer'}} className={`${isPrevBtnActive} page-item`}>                   
           <a className="page-link"id="btnPrev" onClick={this.btnPrevClick}>Previous</a>
          {/* <a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a> */}
          </li>
      }
      let renderNextBtn = null;
      if(isNextBtnActive === 'disabled') {
          renderNextBtn = <li  style={{cursor:'pointer'}} className={`${isPrevBtnActive} page-item`}
                            className={isNextBtnActive}>
                            <a className="page-link"id="btnNext" onClick={this.btnNextClick}> Next </a></li>
      }
      else{
          renderNextBtn = <li  style={{cursor:'pointer'}} className={`${isPrevBtnActive} page-item`}
                            className={isNextBtnActive}>
                            <a className="page-link"id="btnNext" onClick={this.btnNextClick}> Next </a></li>
      }
      return (
        <div>
          <ul>
            {/* {renderTodos} */}
          </ul>
            <nav aria-label="..." className="pull-right">
                <ul className="pagination">
                 {renderPrevBtn}
                {/* {pageDecrementBtn} */}
                {renderPageNumbers}
                {/* {pageIncrementBtn} */}
                {renderNextBtn}
                 </ul>
            </nav>
        </div>
      );
    }
  }

  AllNotices.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  export default withStyles(styles, { withTheme: true })(AllNotices);
  