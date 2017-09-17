        {/* NICKNAME */}        
        <FormItem
        {...formItemLayout}
        label={(
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want other to call you?">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        )}
        hasFeedback
      >
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(
          <Input />
        )}
      </FormItem>
      {/* NICKNAME */}
      {/* CAPTCHA */}
      <FormItem
        {...formItemLayout}
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            {getFieldDecorator('captcha', {
              rules: [{ required: true, message: 'Please input the captcha you got!' }],
            })(
              <Input size="large" />
            )}
          </Col>
          <Col span={12}>
            <Button size="large">Get captcha</Button>
          </Col>
        </Row>
      </FormItem>
      {/* CAPTCHA */}