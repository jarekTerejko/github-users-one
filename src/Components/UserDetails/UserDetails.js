import React, { Component, Fragment } from 'react'
import Loader from '../Loader/Loader'
import {Link} from 'react-router-dom'

export default class UserDetails extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }



    render() {
        const {name, avatar_url, location, bio, blog,login, html_url, followers, following, public_respos, public_gists, hireable} = this.props.user

        const {loading} = this.props

        
            if(loading) {
                return <Loader/>
            } else {
                return (
                    <Fragment>
                        <Link className="btn" to="/" >
                            Back To Search
                        </Link>
                        <div className="row">
                            <div className="col offset-m2 m8 s12">
                                {name}
                            </div>
                        </div>
                    </Fragment>
                )
            }

    }
}
