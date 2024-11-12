import React, { useState } from 'react';
import { Breadcrumb, Button, Card, Container, Dropdown, DropdownButton, Form, InputGroup, Nav, Tab } from 'react-bootstrap';
import Header from '../Header';


const WritingScreen = () => {
  const [threadTitle, setThreadTitle] = useState("Your Thread Title");
  const [threadContent, setThreadContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Select your topic");
  const [activeTab, setActiveTab] = useState('discussion');
  const [pollOptions, setPollOptions] = useState(['']);
  const [pollDuration, setPollDuration] = useState('');

  const topics =["Kiến thức","Thắc mắc"];

  const handleAddPollOption = () => {
    setPollOptions([...pollOptions, '']);
  };

  const handlePollOptionChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);
  };

  const handleRemovePollOption = (index) => {
    const updatedOptions = pollOptions.filter((_, i) => i !== index);
    setPollOptions(updatedOptions);
  };

  return (
    <>
      <Header />
      <Container className="thread my-5">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item href="/">Forums</Breadcrumb.Item>
          <Breadcrumb.Item active>Create Thread</Breadcrumb.Item>
        </Breadcrumb>

        <Card className="p-4 shadow-sm thread">
          <Card.Body>
            <h1 className="mb-4">{threadTitle}</h1>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title={selectedCategory}
                id="input-group-dropdown"
                onSelect={(e) => setSelectedCategory(e)}
              >
                {topics.map((topic) => (
                <Dropdown.Item eventKey={topic}>{topic}</Dropdown.Item>
                ) )}
              </DropdownButton>

              <Form.Control
                placeholder="Thread title"
                value={threadTitle}
                onChange={(e) => setThreadTitle(e.target.value)}
                required
              />
            </InputGroup>

            <Tab.Container defaultActiveKey={activeTab}>
              <Nav variant="tabs" className="mb-3" onSelect={(k) => setActiveTab(k)}>
                <Nav.Item>
                  <Nav.Link style={{color: "#AD49E1"}} eventKey="discussion">Discussion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color: "#AD49E1"}} eventKey="poll">Poll</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="discussion">
                  <Form.Group className="editor mb-3">
                    <div className="d-flex mb-2">
                      <Button variant="light" size="sm" className="me-1">B</Button>
                      <Button variant="light" size="sm" className="me-1">I</Button>
                      <Button variant="light" size="sm" className="me-1">U</Button>
                    </div>
                    <Form.Control
                      as="textarea"
                      rows={10}
                      placeholder="Type your message here..."
                      value={threadContent}
                      onChange={(e) => setThreadContent(e.target.value)}
                    />
                  </Form.Group>
                </Tab.Pane>

                <Tab.Pane eventKey="poll">
                  <Form.Group className="mb-3">
                    <Form.Label>Poll Options</Form.Label>
                    {pollOptions.map((option, index) => (
                      <InputGroup className="mb-2" key={index}>
                        <Form.Control
                          type="text"
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) => handlePollOptionChange(index, e.target.value)}
                        />
                        {pollOptions.length > 1 && (
                          <Button
                            variant="danger"
                            onClick={() => handleRemovePollOption(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </InputGroup>
                    ))}
                    <Button
                      className="mb-3 rounded-button py-2 mt-2"
                      onClick={handleAddPollOption}
                    >
                      Add Option
                    </Button>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Poll Duration (in days)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter duration"
                      value={pollDuration}
                      onChange={(e) => setPollDuration(e.target.value)}
                    />
                  </Form.Group>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>

            <div className='text-end'>
              <Button className="rounded-button mt-2 py-2" variant="primary" >Post Thread</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default WritingScreen;
