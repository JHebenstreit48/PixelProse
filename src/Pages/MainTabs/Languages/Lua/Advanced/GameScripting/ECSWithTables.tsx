import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ECSWithTables = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/GameScripting/ECSWithTables';

  return (
    <>
      <PageLayout>
        <PageTitle title="ECS with Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ECSWithTables;
