import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
