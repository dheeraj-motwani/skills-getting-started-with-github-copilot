// Function to render an activity card
function renderActivityCard(activityName, activity) {
  const card = document.createElement('div');
  card.className = 'activity-card';

  // Existing code for title, description, etc...

  // Participants section
  const participantsSection = document.createElement('div');
  participantsSection.className = 'participants-section';

  const participantsTitle = document.createElement('h5');
  participantsTitle.textContent = 'Participants';
  participantsSection.appendChild(participantsTitle);

  const participantsList = document.createElement('ul');
  participantsList.className = 'participants-list';

  activity.participants.forEach(email => {
    const li = document.createElement('li');
    
    // Avatar: first letter of email, styled circle
    const avatar = document.createElement('span');
    avatar.className = 'participant-avatar';
    avatar.textContent = email[0].toUpperCase();
    li.appendChild(avatar);

    const emailSpan = document.createElement('span');
    emailSpan.textContent = email;
    li.appendChild(emailSpan);

    participantsList.appendChild(li);
  });

  participantsSection.appendChild(participantsList);
  card.appendChild(participantsSection);

  // Existing code to append card to DOM...
}