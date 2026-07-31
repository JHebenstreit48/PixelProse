import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
