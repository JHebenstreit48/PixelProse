import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
