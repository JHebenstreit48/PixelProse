import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EntityId = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/ECS/EntityId';

  return (
    <>
      <PageLayout>
        <PageTitle title="EntityId (Branded)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EntityId;
