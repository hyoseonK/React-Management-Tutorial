import React from 'react';

class Customer extends React.Component{ //한 명에 대한 정보를 출력해줌
    render(){ //항상 수행되는 내용
        return(//{this.props.ooo}를 이용해서 분리해줌. 계층적, 구조화해서 표현 할 수 있음
            <div> 
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{ //하나의 고객에 대한 이미지, 이름, id를 출력해주는 컴포넌트
    //사용자의 id, 이미지값을 랜더링 하는 부분
    //시각장애인들은 이미지를 볼 수 없기에 이미지에 대한 설명을 alt="profile"에 넣어줌
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{ //하나의 고객에 대한 남은 정보를 출력해주는 컴포넌트
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;