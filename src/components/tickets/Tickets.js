import React from "react";
import style from "./tickets.module.scss";
import { TiCoffee, TiMessage } from "react-icons/ti";
import { CgGames } from "react-icons/cg";

const Tickets = () => {
  return (
    <div className={style.tickets} id="Pricing">
      <div className={style.heading}>
        <h2>
          <div>
            Get Your <span>Tickets</span>
          </div>
        </h2>
      </div>
      <section className={style.carts}>
        <div className={style.cart}>
          <div className={style.head}>
            <h3>Eary Bird</h3>
            <p>$640</p>
          </div>
          <ul>
            <li>
              <TiCoffee />
              All-Day Coffee + Snacks
            </li>
            <li>
              <CgGames />
              After Party
            </li>
            <li>
              <TiMessage />
              24/7 Support
            </li>
            <p>Quick group meetings for multiple teams</p>
          </ul>

          <button>Buy Text</button>
        </div>
        <div className={style.cart}>
          <div className={style.head}>
            <h3>Gold</h3>
            <p>$840</p>
          </div>
          <ul>
            <li>
              <TiCoffee />
              Group Meetings + After Party
            </li>
            <li>
              <CgGames />
              Group Meetings + After Party
            </li>
            <li>
              <TiMessage />
              24/7 Support + Instant Chats
            </li>
            <p>Quick group meetings for multiple teams</p>
          </ul>
          <button>Buy Text</button>
        </div>
        <div className={style.cart}>
          <div className={style.head}>
            <h3>Platinum</h3>
            <p>$1,240</p>
          </div>
          <ul>
            <li>
              <TiCoffee />
              Cashback $200
            </li>
            <li>
              <CgGames />
              Private Meetings + After Party
            </li>
            <li>
              <TiMessage />
              24/7 Support + Instant Chats
            </li>
            <p>group talks and private chats for multiple teams</p>
          </ul>
          <button>Buy Text</button>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
