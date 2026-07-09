import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
