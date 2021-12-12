import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import blogs from '../data/blogs'
import { MainLayout, InnerLayout } from '../styles/Layouts'

function BlogsPage() {
    return (
        <MainLayout >
            <BlogsStyled>
                <Title title={'Blogs'} span={'Blogs'} />
                <InnerLayout className="blog">
                    {blogs.map((blog) => {
                        return <div key={blog.id} className='blog-item' >
                            <div className="image">
                                <a href={blog.link} target='_blank' rel="noreferrer" >
                                    <img src={blog.image} alt="" />
                                </a>
                            </div>

                            <div className="title">
                                <a href={blog.link} target='_blank' rel="noreferrer" >
                                    {blog.title}
                                </a>
                                <p className='date'>- {blog.date}-{blog.month}</p>
                            </div>
                        </div>

                    })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

export default BlogsPage

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        padding: rem 1rem;

        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);

        }
        
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1.8rem 1rem;
            margin: 1rem 0;

        }
        
        .image{
            width: 100%;
            overflow:hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: scale(1.1);
                }
            }
        }

        .title{
            position:relative;

            a{
                font-size: 1rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }

            .date{
                font-size: .8rem;
                padding: .4rem;
                position:absolute;
                bottom:1;
                right:0;
            }
        }
    }
`