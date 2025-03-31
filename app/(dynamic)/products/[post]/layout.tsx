function PostLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    return(
        <div>
            <h1>PostLayout</h1>
            {children}
        </div>
    )
}
export default PostLayout;