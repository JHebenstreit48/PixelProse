import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DataTypes = () => {
  const markdownFilePath = 'Languages/Lua/Basics/Fundamentals/DataTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataTypes;
