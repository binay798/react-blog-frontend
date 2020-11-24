import React from 'react'
import classes from './Contact.module.scss';
import Input from './../../components/UI/Input/Input';
import Button from './../../components/UI/Button/Button'
import { withRouter } from 'react-router';
import Map from '../../components/Map/Map'

function Contact() {

    const btnStyle = {
        background: 'coral',
        color: 'white',
        padding: '1rem 2rem'
    }
    return (
        <div className={classes.contact}>
            <div className={classes.contact__top}>
                <h2>Contact Us</h2>
                <div className={classes.contact__top__container}>
                    <div>
                        <strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016
                    </div>
                    <div>
                        <strong>Phone:</strong> + 1235 2355 98
                    </div>
                    <div>
                        <strong>Email:</strong> info@yoursite.com
                    </div>
                    <div>
                        <strong>Website: </strong>mywebsiteblog.com
                    </div>
                </div>
            </div>

            <div className={classes.contact__bottom}>
                <form className={classes.contact__bottom__left}>
                    <Input placeholder={'Your Name'} type={'text'} />
                    <Input placeholder={'Your Email'} type={'text'} />
                    <Input placeholder={'Subject'} type={'text'} />
                    <textarea name="message" className={classes.contact__bottom__left__textarea} cols="30" rows="10" placeholder="Your message">

                    </textarea>

                    <Button name={'Submit'} style={btnStyle} />
                </form>
                <div className={classes.contact__bottom__right}>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Contact
