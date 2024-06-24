import React from 'react';
import './AllPosts.css';
import PostCard from '../PostCard/PostCard';
import postpic1 from '../../../Assets/feed_img1.png';
import postpic2 from '../../../Assets/feed_img2.png';
import postpic3 from '../../../Assets/feed_img3.png';
import profilePic1 from '../../../Assets/profile_pic1.svg';
import profilePic2 from '../../../Assets/profile_pic2.svg';
import profilePic3 from '../../../Assets/profile_pic3.svg';
import profilePic4 from '../../../Assets/profile_pic4.svg';

const AllPosts = () => {

  const postDetails = [
    {
        postPic: postpic1,
        postType: "✍️ Article",
        postTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
        postText: "I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine the way users interact with digital products and create seamless experiences that delight and engage.",
        userPic: profilePic1,
        userName: "Sarthak Kamra",
        postViews: "1.4k views"
    },
    {
        postPic: postpic2,
        postType: "🔬️ Education",
        postTitle: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        postText: "I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine the way users interact with digital products and create seamless experiences that delight and engage.",
        userPic: profilePic2,
        userName: "Sarah West",
        postViews: "2.3k views"
    },
    {
        postPic: postpic3,
        postType: "🗓️ Meetup",
        postTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
        postDate: "Fri, 12 Oct, 2018",
        postLocation: "Ahmedabad, India",
        postButton: {
            btnName: "Visit Website",
            btnColor: "rgba(229, 97, 53, 1)"
        },
        userPic: profilePic3,
        userName: "Ronal Jones",
        postViews: "5.6k views"
    },
    {
        postType: "💼️ Job",
        postTitle: "Software Developer",
        postCompany: "Innovaccer Analytics Private Ltd.",
        postLocation: "Noida, India",
        postButton: {
            btnName: "Apply on Timesjobs",
            btnColor: "rgba(2, 184, 117, 1)"
        },
        userPic: profilePic4,
        userName: "Joseph Gray",
        postViews: "897 views"
    },
  ];

  return (
    <div className='allposts'>
        {
            postDetails.map( (postInfo, index) => 
                <PostCard key={index} postInfo={postInfo}/>
            )
        }
    </div>
  )
}

export default AllPosts;