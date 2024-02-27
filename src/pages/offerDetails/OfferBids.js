import Footer from "components/_common/copyWritefooter/Footer";
import UserHeader from "layout/UserHeader";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function OfferBids() {
  const [sidebarShow, setSidebarShow] = React.useState(false);

  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <div className="flex-1 w-full flex flex-col gap-5 mt-28 px-14">
          <p className="w-full text-3xl font-semibold">Offer Bids</p>
          <table>
            <tr className="text-left">
              <th>No.</th>
              <th>Buyer</th>
              <th>Bid</th>
              <th>ID</th>
              <th>PKRD Coins</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Virat Kohli</td>
              <td>111</td>
              <td>db38db3</td>
              <td>5.568</td>
              <td>23 Feb 2024</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Some Other Player</td>
              <td>222</td>
              <td>abc123</td>
              <td>6.789</td>
              <td>24 Feb 2024</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Another Player</td>
              <td>333</td>
              <td>xyz456</td>
              <td>7.890</td>
              <td>25 Feb 2024</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Yet Another Player</td>
              <td>444</td>
              <td>uvw789</td>
              <td>8.901</td>
              <td>26 Feb 2024</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Last Player</td>
              <td>555</td>
              <td>123abc</td>
              <td>9.012</td>
              <td>27 Feb 2024</td>
            </tr>
          </table>
        </div>
      )}
      {!sidebarShow && (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default OfferBids;
