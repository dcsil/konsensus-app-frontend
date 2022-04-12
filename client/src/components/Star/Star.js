import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Col } from 'reactstrap';
import { starFile } from 'api/fileFunctions';

const StarFile = ({ file, isStarred }) => {

    const handleStar = () => {
        starFile(file.id);
        window.location.reload();
    };

    return (
        <Col className="mr--3 mt--3" lg={{ size: 'auto' }}>
            {isStarred ? (
                <BsStarFill
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStar()}
            />
        ) : (
            <BsStar
                style={{ cursor: 'pointer' }}
                onClick={() => handleStar()}
            />
            )
        }
        </Col>
    )}
export default StarFile;