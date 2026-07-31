import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
