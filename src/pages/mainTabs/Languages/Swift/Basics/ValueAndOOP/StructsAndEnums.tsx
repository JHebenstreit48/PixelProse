import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
