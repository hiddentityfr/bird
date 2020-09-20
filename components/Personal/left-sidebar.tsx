import React from 'react';

export default function LeftSideBar() {
  return (
    <div className="left-sidebar">
      <div className="title-left-sidebar">
        <img
          src="/images/logo-color.png"
          alt="Hiddentity logo"
          className="img-title-left-sidebar"
        />
        <p className="text-title-sidebar">Hiddentity</p>
      </div>

      <div className="navigation-left-sidebar">
        <div className="div-nav-left-sidebar">
          <p className="nav-left-sidebar">Accueil</p>
        </div>
        <div className="div-nav-left-sidebar">
          <p className="nav-left-sidebar">Candidats</p>
        </div>
        <div className="div-nav-left-sidebar">
          <p className="nav-left-sidebar">Offres</p>
        </div>
        <div className="div-nav-left-sidebar">
          <p className="nav-left-sidebar-active">Administration</p>
        </div>
      </div>

      <div className="bot-navigation-left-sidebar">
        <div className="account-navigation-left-sidebar">
          <p className="text-bot-navigation-left-sidebar">Mon compte</p>
        </div>
        <div className="parameters-navigation-left-sidebar">
          <p className="text-bot-navigation-left-sidebar">Paramètres</p>
        </div>
      </div>
    </div>
  );
}
