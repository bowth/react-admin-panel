import "./user.css"
import {CalendarToday, PhoneAndroid, MailOutline, PermIdentity, LocationSearching, LocationOn, Publish} from "@material-ui/icons"
import { Link } from "react-router-dom"
export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>   
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Nawshad Nawas</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>

                   <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">nawshi23</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">23.03.2000</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>

                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+90 552 376 82 90</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">nawshadhnawas@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Mezitli/Mersin Turkey</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdatItem">
                            <label>Username</label>
                            <input type="text" placeholder="nawshi23" className="userUpdateInput"></input>
                        </div>

                        <div className="userUpdatItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Nawshad Nawas" className="userUpdateInput"></input>
                        </div>

                        <div className="userUpdatItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+90 552 376 82 90" className="userUpdateInput"></input>
                        </div>

                        <div className="userUpdatItem">
                            <label>Email</label>
                            <input type="text" placeholder="nawshadhnawas@gmail.com" className="userUpdateInput"></input>
                        </div>

                        <div className="userUpdatItem">
                            <label>Address</label>
                            <input type="text" placeholder="Mezitli/Mersin Turkey" className="userUpdateInput"></input>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                        <input type="file" id="file" style={{display:"none"}}></input>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
