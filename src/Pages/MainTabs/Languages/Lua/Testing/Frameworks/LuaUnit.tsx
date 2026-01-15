import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LuaUnit = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/LuaUnit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="LuaUnit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LuaUnit;
