import React from 'react';
import './AllGroups.css';
import groupPic1 from '../../../Assets/group_pic1.svg';
import groupPic2 from '../../../Assets/group_pic2.svg';
import groupPic3 from '../../../Assets/group_pic3.svg';
import groupPic4 from '../../../Assets/group_pic4.svg';
import Group from '../Group/Group';

const AllGroups = () => {
  const allGroupDetails = [
    {
        groupPic: groupPic1,
        groupName: "Leisure"
    },
    {
        groupPic: groupPic2,
        groupName: "Activism"
    },
    {
        groupPic: groupPic3,
        groupName: "MBA"
    },
    {
        groupPic: groupPic4,
        groupName: "Philosophy"
    },
  ];

  return (
    <div className='allgroups'>
        {
            allGroupDetails.map((groupDetail, index) => (
                <Group key={index} groupDetail={groupDetail} />
            ))
        }
        <div className='more_groups'>See More...</div>
    </div>
  )
}

export default AllGroups;