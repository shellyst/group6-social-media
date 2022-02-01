USE group6_social_media_db;
INSERT INTO post (id, author_id, post_type, featured_image, content_text, content_link, video)
VALUES
    (1, 1, 'text', 'image1', 'Hello world!', 'http://google.com', ''),
    (2, 1, 'text', 'image2', 'Sample text for post 2', 'http://yahoo.com', ''),
    (3, 1, 'video', 'image3', '', '', 'https://www.youtube.com/watch?v=TlB_eWDSMt4')