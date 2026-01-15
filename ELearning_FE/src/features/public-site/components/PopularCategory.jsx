import CategoryCard from '@/shared/components/CategoryCard';
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';

const PopularCategory = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            categoryName: 'Web Development',
            availabePosition: 120,
            numberInterested: 3000
        },
        {
            id: 2,
            categoryName: 'Data Science',
            availabePosition: 80,
            numberInterested: 2500
        },
        {
            id: 3,
            categoryName: 'Graphic Design',
            availabePosition: 50,
            numberInterested: 1500
        },
        {
            id: 4,
            categoryName: 'Mobile Development',
            availabePosition: 100,
            numberInterested: 2000
        },
        {
            id: 5,
            categoryName: 'Digital Marketing',
            availabePosition: 60,
            numberInterested: 1800
        }
    ]);

    const handleInterest = (id) => {
        const updatedCategories = categories.map((category) => {
            if (category.id === id) {
                return { ...category, numberInterested: category.numberInterested + 1 };
            }
            return category;
        });
        setCategories(updatedCategories);
        setSearchCategories(updatedCategories);
    }

    const [searchCategories, setSearchCategories] = useState(categories);

    const search = (keyword) => {
        if (!keyword.trim()) {
            setSearchCategories(categories);
            return;
        } else {
            const result = categories.filter((item) => item.categoryName.toLowerCase().includes(keyword.toLowerCase().trim()));
            setSearchCategories(result);
        }

    }

    return (
        <Container fluid className='mt-5'>
            <Row className='justify-content-center' >
                <Col md={10}>
                    <h1>Popular Categories
                        <Form.Control id="keyword" type="search" placeholder="Search job title skill or category name"
                            className="my-2" aria-describedby="password" onChange={(e) => { search(e.target.value) }} />
                    </h1>
                    <Row >
                        {searchCategories.map((category) => (
                            <Col md={3} key={category.id} className='mb-3'>
                                <CategoryCard category={category} handleInterest={handleInterest} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default PopularCategory
