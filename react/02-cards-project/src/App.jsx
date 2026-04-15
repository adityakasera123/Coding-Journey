import Card from './components/card'

function App(){
const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/960px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/5b/83/69/5b83693bae2828e7c357855f276520b0.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://w7.pngwing.com/pngs/36/959/png-transparent-meta-logo-facebook-social-media-chat-message-communication-icon-thumbnail.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Banglore, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?_=20210729021049",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Lucknow, India"
  },
  {
    brandLogo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Photo.png",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/uber-new-logo-2018-11550112725dlrgv5nhdy.png",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Hydrabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kwI02S7FEQbyWecoX7Tuzh3dzw2S_cyqUw&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Banglore, India"
  },
  {
    brandLogo: "https://icon2.cleanpng.com/20180614/hau/kisspng-salesforce-com-netsuite-customer-relationship-mana-great-idea-5b22720fe7eb20.32355178152898407995.jpg",
    companyName: "Salesforce",
    datePosted: "12 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$57/hr",
    location: "Noida, India"
  }
];

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,idx){
      return <div key={idx}> 
      <Card company={elem.companyName} post={elem.post} date={elem.datePosted}
        tag1={elem.tag1} tag2= {elem.tag2} pay={elem.pay} location={elem.location}
        brandLogo={elem.brandLogo}
      />
      </div>
     })}
    </div>
  )
}
export default App;