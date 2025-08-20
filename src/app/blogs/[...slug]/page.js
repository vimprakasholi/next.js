const BlogDetails = async({params}) => {
    const slug = (await params).slug;
    console.log(slug);
    
  return (
    <div>
      <h1>Blogs Details</h1>
      <ul>
        <li>{slug[0]}</li>
        <li>{slug[1]}</li>
        <li>{slug[2]}</li>
      </ul>
    </div>
  )
}

export default BlogDetails
