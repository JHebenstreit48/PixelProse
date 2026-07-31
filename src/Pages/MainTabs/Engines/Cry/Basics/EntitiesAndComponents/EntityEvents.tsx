import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
