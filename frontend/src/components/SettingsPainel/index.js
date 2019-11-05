import React from 'react';

import SettingsPainelStyled from '../Styled/SettingsPainel';

import './styles.css';

class SettingsPainel extends React.Component {
    render() {
        return (
            <SettingsPainelStyled className="settingspainelstyled" color={this.props.color}>
                <div className="title">
                    <p>{this.props.title}</p>                    
                </div>
            </SettingsPainelStyled>
        );
    }
}

export default SettingsPainel;