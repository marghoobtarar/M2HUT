import React from 'react';

// import { Container } from './styles';

export default function home() {
  return (
   <div>

    <header class="custom-header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src="img/icon/logo.jpg" alt="icon" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNavDropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto"></ul>
                <form class="form-inline">
                  <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav ml-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login <span class="mr-1"><img src="img/login-nav.png" alt="image" width="25px" /></span></a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    </header>


   </div>
  );
}
