import React, {Component} from "react";
import '../assets/app.css';
import PublishComment from "./pages/publish-comment";
import CommentList from "./pages/comment-list";

export default class App extends Component {
    //state的简写属性
    state = {
        commentList: []
    };

    //添加评论
    addComment = (docs) => {
        const {commentList} = this.state;
        commentList.push(docs);
        //更新状态
        this.setState({commentList});
    };

    //删除评论，考虑同一个人可能会发布多条评论，所以通过id删除
    delComment = (id) => {
        const {commentList} = this.state;
        commentList.forEach((item,index) => {
            if(item.id === id) {
                commentList.splice(index,1);
            }
        });
        this.setState({commentList});
    };
    render() {
        return (
            <div id={'app'}>
                {/*顶部提示*/}
                <div className="top">
                    <h1>谈谈你对react学习的看法吧</h1>
                </div>
                {/*底部操作栏*/}
                <div className="bottom">
                    {/*左侧为发布区*/}
                    <div className="left">
                        <PublishComment  addComment={this.addComment}/>
                    </div>
                    {/*右侧为显示区*/}
                    <div className="right">
                        <CommentList commentList={this.state.commentList} delComment={this.delComment}/>
                    </div>
                </div>
            </div>
        )
    }
}