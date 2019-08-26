import React, {Component} from "react"
import '../../assets/publish-comment.css'

export default class PublishComment extends Component {
    state = {
        id: 0
    };
    //发布评论
    handlePublish = () => {
        let {id} = this.state;
        if (!!this.name.value && !!this.content.value) {
            this.props.addComment({
                id,
                name: this.name.value,
                content: this.content.value,
            });
            id++;
            this.setState({id});
        } else {
            alert("恶作剧真的好吗？？？");
        }


    };

    render() {
        return (
            <div className={'publish_comment'}>
                {/*输入姓名*/}
                <div className="input">
                    <input type="text" placeholder={'请输入您的姓名'} ref={name => this.name = name}/>
                </div>
                {/*输入评论内容*/}
                <div className="textarea">
                    <textarea placeholder={'请输入评论内容'} ref={content => this.content = content}>
                    </textarea>
                </div>
                {/*点击发布*/}
                <div className="btn">
                    <button onClick={this.handlePublish}>发布</button>
                </div>
            </div>
        )
    }
}