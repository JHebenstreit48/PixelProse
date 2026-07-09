import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
