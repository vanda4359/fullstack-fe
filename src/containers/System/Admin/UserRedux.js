import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions'
import "./UserRedux.scss"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: "",
            isOpen: false,
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    handleOnChangeImage = (e) => {
        let data = e.target.files;
        let file = data[0]
        if(file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl
            })
        }
    }

    openPreviewImg = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
     }

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        return (
            <div className='user-redux-container'>
                <div className='title'>Add User</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>{isLoadingGender ? "Loading gender" : ""}</div>
                            <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='password' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.firstName" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.lastName" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.phoneNumber" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-8'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control">
                                    {genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control">
                                    {positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.roleId" /></label>
                                <select className="form-control">
                                    {roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-12'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div className="preview-img-container">
                                    <input id="previewImg" type='file' hidden
                                        onChange={(event) => this.handleOnChangeImage(event)}
                                    />
                                    <label className="label-upload" htmlFor='previewImg'>Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="preview-image"
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImg()}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'><FormattedMessage id="manage-user.save" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
