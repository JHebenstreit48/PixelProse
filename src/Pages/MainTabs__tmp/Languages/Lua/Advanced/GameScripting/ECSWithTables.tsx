import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
