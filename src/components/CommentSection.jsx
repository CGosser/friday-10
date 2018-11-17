import React from "react";
import CommentList from './CommentList';
import NewCommentControl from './NewCommentControl';
import Moment from 'moment';

class CommentSection extends React.Component{
  constructor() {
    super();
    this.state = {
      masterCommentList: []
    };
    this.handleAddingNewCommentToList = this.handleAddingNewCommentToList.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCommentElapsedWaitTime(),
    5000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updateCommentElapsedWaitTime() {
    console.log("check");
    let newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.forEach((comment) =>
      comment.commentTimeStamp = (comment.timeOpen).fromNow(true)
    );
    this.setState({masterCommentList: newMasterCommentList});
  }

  handleAddingNewCommentToList(newComment){
    var newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});
  }


  }

export default CommentSection;
