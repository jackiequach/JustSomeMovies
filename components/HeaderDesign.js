import Link from 'next/link'
import Img from 'react-image'


const linkStyle = {
  marginRight: 15
}

const iconStyle = {
  marginRight:15,
  marginTop:10,
  height: 'auto',
  width: 'auto', 
  'max-width': '100px', 
  'max-height': '120px'
}

const HeaderDesign = (props) => {
    return <nav className="mainHead">
        <ul className="navbar-nav">
            <Img src="https://i.ibb.co/LtLp5Ww/logo.png" alt="logo" border="0" style={iconStyle}/> 
            <Link href="/"><a className="nav-link">JSM</a></Link>
            <Link href="/"><a className="nav-link">Movies</a></Link>
            <Link href="/"><a className="nav-link">Actors</a></Link>
            <input className="search" type="search" placeholder="Search" aria-label="Search"/>
            <button type="Searchbutton">Search</button>
        </ul>

        
        <style jsx>{`

          mainHead {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }

          .mainHead {
            overflow: hidden;
            background-color: #333;
          }

          .mainHead a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            font-family: Arial
          }

          .mainHead a:hover {
            background-color: #ddd;
            color: black;
          }

          .mainHead a.active {
            background-color: #4CAF50;
            color: white;
          }

          input {
              margin-right: 20px;
              float: right;
              center
              text-align: center;
              padding: 7px 7px;
              text-decoration: none;
              font-size: 17px;
              font-family: Arial
              height: 30px;
              background-color: #f2f2f2;
          }

          button {
              margin-right: 10px;
              float: right;
              text-align: center;
              padding: 7px ;
              text-decoration: none;
              font-size: 17px;
              height: 38px;
              font-family: Arial
          }


      `}</style>
    </nav>
};

export default HeaderDesign





