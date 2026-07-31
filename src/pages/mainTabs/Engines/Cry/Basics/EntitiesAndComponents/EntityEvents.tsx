import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EntityEvents = () => {
  const markdownFilePath = 'Engines/Cry/Basics/EntitiesAndComponents/EntityEvents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Entity Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EntityEvents;
