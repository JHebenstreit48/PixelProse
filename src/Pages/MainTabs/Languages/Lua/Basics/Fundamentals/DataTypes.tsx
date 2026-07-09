import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
