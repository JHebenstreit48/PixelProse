import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const StringsAndPatterns = () => {
  const markdownFilePath = 'Languages/Lua/Basics/DataAndStructures/StringsAndPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Strings & Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StringsAndPatterns;
