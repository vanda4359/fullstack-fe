import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Sức khỏe với cuộc sống
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400"
                            src="https://www.youtube.com/embed/P8YPa-PQidk"
                            title="Sức khỏe  và cuộc sống: Chăm sóc sức khỏe người cao tuổi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                        Sức khỏe đóng vai trò quan trọng không chỉ trong việc duy trì cuộc sống hàng ngày mà còn trong việc tận hưởng mọi trải nghiệm. Cuộc sống bận rộn thường khiến chúng ta dễ bỏ qua việc chăm sóc sức khỏe, nhưng thực tế là sức khỏe tốt đem lại sức mạnh để đối mặt với những thách thức. Bằng cách duy trì lối sống lành mạnh với chế độ ăn uống cân đối, vận động đều đặn và thời gian nghỉ ngơi đủ, chúng ta có thể tạo ra nền tảng vững chắc để cảm thấy tự tin và năng động hơn trong cuộc sống. Sức khỏe không chỉ là sự hiện diện của không gian trống về bệnh tật mà còn là sự cân bằng giữa tinh thần và thể chất, giúp chúng ta sống một cuộc sống thịnh vượng và hạnh phúc hơn.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
