# Use latest python
FROM python:3.10

# Ensures python output is unbuffered when written out
ENV PYTHONUNBUFFERED 1

# System dependencies
RUN apt-get update && apt-get install -y netcat-traditional

# Create sbox user
RUN useradd -ms /bin/sh sbox

# Add user bin to path
ENV PATH /home/sbox/.local/bin:$PATH

# Create backend directory
RUN mkdir /backend
RUN mkdir /backend/staticfiles

# Set backend directory to working directory
WORKDIR /backend

# Copy project files to /backend
COPY . /backend/
COPY ./entrypoint.sh /backend/entrypoint.sh
RUN chmod +x /backend/entrypoint.sh
RUN chown -R sbox:sbox /backend/

# Change to sbox user
USER sbox

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["/backend/entrypoint.sh"]