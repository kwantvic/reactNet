import React, { useEffect } from "react";
import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChahge = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChahge}
              autoFocus="true"
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}


// const ProfileStatus = (props) => {
//   const [editMode, setEditMode] = React.useState(false);
//   const [status, setStatus] = React.useState(props.status);
//
//   useEffect (() => {
//     setStatus(props.status)
//   }, [props.status])
//
//   const activateEditMode = () => {
//     setEditMode(true);
//   };
//
//   const deactivateEditMode = () => {
//     setEditMode(false);
//     props.updateStatus(status);
//   };
//
//   const onStatusChahge = (e) => {
//     setStatus(e.currentTarget.value);
//   };
//
//   return (
//     <div>
//       {!editMode && (
//         <div>
//           <span onDoubleClick={activateEditMode}>
//             {props.status || "-----"}
//           </span>
//         </div>
//       )}
//       {editMode && (
//         <div>
//           <input
//             onChange={onStatusChahge}
//             autoFocus="true"
//             onBlur={deactivateEditMode}
//             value={status}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

export default ProfileStatus;
