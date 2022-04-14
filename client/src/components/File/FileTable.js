import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from 'reactstrap';

import FileRow from 'components/File/FileRow.js';

const FileTable = (props) => {
  return (
    <Container className="mt--7 pb-7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Files</h3>
            </CardHeader>

            <Table
              className="align-items-center table-flush"
              responsive
            >
              {/* </File> */}
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Size</th>
                  <th scope="col">Collaborators</th>
                  <th scope="col">Last Updated</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {props.files &&
                  props.files.map((file) => (
                    <FileRow file={file} key={file.id}></FileRow>
                  ))}
              </tbody>
            </Table>

            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default FileTable;
