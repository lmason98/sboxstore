# Use latest python
FROM python:3.10

# Ensures python output is unbuffered when written out
ENV PYTHONUNBUFFERED 1

# System dependencies
RUN apt-get update && apt-get install -y netcat-traditional

# Create sbox user
#RUN addgroup --system sbox && adduser --system --group sbox

# Create backend directory
RUN mkdir /api
RUN mkdir /api/staticfiles

# Set backend directory to working directory
WORKDIR /api

# Copy project files to /backend
COPY . /api/
RUN chmod +x /api/entrypoint.sh
#RUN chown -R sbox:sbox /api/

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Change to sbox user
#USER sbox

ENTRYPOINT ["/api/entrypoint.sh"]