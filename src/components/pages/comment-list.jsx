import React, {Component} from "react"
import "../../assets/comment_list.css"

export default class CommentList extends Component {
    //删除评论
    handleDel(id) {
        // console.log(id)
        const {delComment} = this.props;
        delComment(id);
    };

    render() {
        return (
            <div className={"comment_list"}>
                <ul>
                    {
                        this.props.commentList.map(
                            (item, index) => <li key={index}>
                                {/*发布者姓名*/}
                                <p>{item.name}说：
                                    <div className="btn">
                                        {/*点击删除的业务逻辑*/}
                                        <button onClick={this.handleDel.bind(this, item.id)}>删除</button>
                                    </div>
                                </p>
                                {/*发布者内容*/}
                                <p>{item.content}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}