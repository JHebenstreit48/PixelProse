import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
