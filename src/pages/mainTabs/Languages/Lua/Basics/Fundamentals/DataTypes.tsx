import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
