import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StructsAndEnums = () => {
  const markdownFilePath = 'Languages/Swift/Basics/ValueAndOOP/StructsAndEnums';

  return (
    <>
      <PageLayout>
        <PageTitle title="Structs & Enums" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructsAndEnums;
