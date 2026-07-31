import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LuaUnit = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/LuaUnit';

  return (
    <>
      <PageLayout>
        <PageTitle title="LuaUnit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LuaUnit;
