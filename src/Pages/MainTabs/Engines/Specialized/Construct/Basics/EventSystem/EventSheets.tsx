import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventSheets = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/EventSystem/EventSheets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Event Sheets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventSheets;
